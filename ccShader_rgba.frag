#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_redAdj;
uniform float u_greenAdj;
uniform float u_blueAdj;
uniform float u_alphaAdj;

void main() {
	vec4 textureColor = texture2D(CC_Texture0, v_texCoord)*v_fragmentColor;
	gl_FragColor = vec4(textureColor.r * u_redAdj, textureColor.g * u_greenAdj, textureColor.b * u_blueAdj, textureColor.a * u_alphaAdj);	
}