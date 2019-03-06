#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_width;
uniform float u_height;

const float PI = 3.1415926535897932;

//speed
const float speed = 0.05;
const float speed_x = 0.1;
const float speed_y = 0.1;

// refraction
const float emboss = 0.20;
const float intensity = 2.0;
const int steps = 8;
const float frequency = 15.0;
const int angle = 7; // better when a prime

const float delta = 60.0;

float time = CC_Time[0]*1.5;

float col(vec2 coord)
{
	float delta_theta = 2.0 * PI / float(angle);
	float col = 0.0;
	float theta = 0.0;
	for (int i = 0; i < steps; i++)
	{
		vec2 adjc = coord;
		theta = delta_theta*float(i);
		adjc.x += cos(theta)*time*speed + time * speed_x;
		adjc.y -= sin(theta)*time*speed - time * speed_y;
		col = col + cos( (adjc.x*cos(theta) - adjc.y*sin(theta))*frequency)*intensity;
	}

	return cos(col);
}


void main(void)
{
	vec2 p = v_texCoord, c1 = p, c2 = p;
	float cc1 = col(c1);

	c2.x += u_width/delta;
	float dx = emboss*(cc1-col(c2))/delta;

	c2.x = p.x;
	c2.y += u_height/delta;
	float dy = emboss*(cc1-col(c2))/delta;

	gl_FragColor = texture2D(CC_Texture0, p+vec2(dx, dy));
}