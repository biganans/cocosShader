
#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

void main()
{
	vec4 col = texture2D(CC_Texture0, v_texCoord);
	float plus = 0.7 * col.a;
	float r = col.r + v_fragmentColor.r * plus;
	float g = col.g + v_fragmentColor.g * plus;
	float b = col.b + v_fragmentColor.b * plus;
	gl_FragColor = v_fragmentColor.a * vec4(r, g, b, col.a);
	
	//gl_FragColor = v_fragmentColor * vec4(col.r, col.g, col.b, col.a);
}
