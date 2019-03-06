#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform sampler2D u_mask_texture;
uniform float u_startX;
uniform float u_startY;
uniform float u_Width;
uniform float u_Height;

void main()
{
		vec2 nowtexCoord;
		vec4 normalColor = texture2D(CC_Texture0, v_texCoord);
		nowtexCoord.x = (v_texCoord.x - u_startX) / u_Width;
		nowtexCoord.y = (v_texCoord.y - u_startY) / u_Height;
		normalColor.a   = texture2D(u_mask_texture, nowtexCoord).a;
		normalColor.rgb = normalColor.rgb * normalColor.a;
		gl_FragColor = v_fragmentColor * normalColor;
}