uniform sampler2D u_lightTexture;    
uniform sampler2D u_maskTexture;  
uniform float v_LightColor_r;
uniform float v_LightColor_g;
uniform float v_LightColor_b;
uniform float v_LightColor_a;
uniform float v_animLight_u;
uniform float v_animLight_v;

varying vec2 v_texCoord;
  
void main(void)  
{ 
	vec4 imgcolor = texture2D(CC_Texture0, v_texCoord);
	vec4 maskcolor = texture2D(u_maskTexture, v_texCoord);
	vec4 v_LightColor = vec4(v_LightColor_r, v_LightColor_g, v_LightColor_b, v_LightColor_a);
	vec2 v_animLight  = vec2(v_animLight_u, v_animLight_v);
	vec4 lightcolor = texture2D(u_lightTexture, v_texCoord + v_animLight.xy);
	lightcolor.a = lightcolor.r;
	lightcolor = lightcolor * (imgcolor.r * 0.299 + imgcolor.g * 0.587 + imgcolor.b * 0.114);
	
	//lightcolor = lightcolor * v_LightColor;
	
	gl_FragColor = imgcolor + lightcolor * maskcolor.r;
} 