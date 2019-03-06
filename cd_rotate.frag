#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;
uniform float _angle; // = 6.284*(_angle-0.5); 

//hx: why miss atan2() function delareation
//write it by myself
//return 0 -- 2*3.142

float pai = 3.14159;

float hx_atan2(vec2 pos)
{
	pos.y = -pos.y;
	if(pos.y > 0.00001)
	{	
		if(pos.x < 0.00001)
			return pai * 2.0 + atan(pos.x/pos.y);
		else
			return atan(pos.x/pos.y);
	}
	else if(pos.y < 0.00001)
	{
		if(pos.x < 0.00001)
		{
			return pai + atan(pos.x/pos.y);
		}
		else
		{
			return pai + atan(pos.x/pos.y);
		}
	}
	else
	{
		if(pos.x > 0.00001)
			return pai * 0.5;
		else if(pos.x < 0.00001)
			return pai * 1.5;
		else
			return 999.99;//center point
	}
	
}

void main()
{
	if(_angle > 0.99)
	{
		discard;
		return;
	}
	vec2 uv = v_texCoord - vec2(0.5, 0.5);
	float _angle2 = pai*2.0*_angle;
	
	if(_angle2 > (hx_atan2(uv)))
	{
		discard;
	}
	else
	{
		gl_FragColor = texture2D(CC_Texture0, v_texCoord)*v_fragmentColor;
	}
}