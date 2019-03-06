#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform vec2 u_texOffset;
uniform float u_width;

void main()
{
	if(v_texCoord.x < u_width){
		vec2 texcoord = mod(u_texOffset+v_texCoord,1.0); 
		vec4 normalColor = v_fragmentColor * texture2D(CC_Texture0, texcoord);
		gl_FragColor = normalColor;
	}
	else{
		discard;
	}
}