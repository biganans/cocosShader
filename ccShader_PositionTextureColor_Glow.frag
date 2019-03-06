#ifdef GL_ES
precision highp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

const float f1 = 0.15;
const float f2 = 0.12;
const float f3 = 0.09;
const float f4 = 0.05;
const float fc = 0.16;

uniform float u_redAdj;
uniform float u_greenAdj;
uniform float u_blueAdj;

uniform float u_Width;
uniform float u_Height;
uniform float u_useAlphaTexture;

uniform int fontIsGrey;


void main(void) {
   vec4 sum = vec4(0.0);
   vec2 tc = v_texCoord;
   float blur = 1.0 / u_Width * CC_Time.a * 4.0; 
   vec4 texColor = texture2D(CC_Texture0, v_texCoord);
   
	sum += texture2D(CC_Texture0, vec2(tc.x - 4.0*blur, tc.y)) * f4;
	sum += texture2D(CC_Texture0, vec2(tc.x - 3.0*blur, tc.y)) * f3;
	sum += texture2D(CC_Texture0, vec2(tc.x - 2.0*blur, tc.y)) * f2;
	sum += texture2D(CC_Texture0, vec2(tc.x - 1.0*blur, tc.y)) * f1;
	
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y)) * fc;
	
	sum += texture2D(CC_Texture0, vec2(tc.x + 1.0*blur, tc.y)) * f1;
	sum += texture2D(CC_Texture0, vec2(tc.x + 2.0*blur, tc.y)) * f2;
	sum += texture2D(CC_Texture0, vec2(tc.x + 3.0*blur, tc.y)) * f3;
	sum += texture2D(CC_Texture0, vec2(tc.x + 4.0*blur, tc.y)) * f4;
	
	blur = 1.0 / u_Height* 2.0; 
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y - 4.0*blur)) * f4;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y - 3.0*blur)) * f3;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y - 2.0*blur)) * f2;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y - 1.0*blur)) * f1;
	
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y)) * fc;
	
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y + 1.0*blur)) * f1;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y + 2.0*blur)) * f2;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y + 3.0*blur)) * f3;
	sum += texture2D(CC_Texture0, vec2(tc.x, tc.y + 4.0*blur)) * f4;	
	
	sum = sum / 2.0;
   
    vec4 color = vec4(1.0, 1.0, 1.0, 1.0);
    if (texColor.a < 0.5)
	{
		color = vec4(u_redAdj * (1.0- sum.a) + sum.a * sum.r, u_greenAdj * (1.0- sum.a) + sum.a * sum.g, u_blueAdj * (1.0- sum.a) + sum.a * sum.b, sum.a);
	}
	else
	{
		//gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
		color = texColor;
	}
    
    if (fontIsGrey == 1) {
        float average = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
        gl_FragColor = vec4(average, average, average, color.a);
    } else {
        gl_FragColor = color;
    }
}
