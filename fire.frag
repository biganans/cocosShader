#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

void main()
{
    gl_FragColor = texture2D(CC_Texture0, v_texCoord) * v_fragmentColor;
	
	float greyNum = 0.6;	
	gl_FragColor.r = gl_FragColor.r * greyNum * 3.0;
	gl_FragColor.g = gl_FragColor.g * greyNum;
	gl_FragColor.b = gl_FragColor.b * greyNum;
}
