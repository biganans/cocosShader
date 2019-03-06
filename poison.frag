#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

void main()
{
    gl_FragColor = texture2D(CC_Texture0, v_texCoord) * v_fragmentColor;
	//gl_FragColor.r *= 0.8;
	//gl_FragColor.r += 0.08 * gl_FragColor.a;
	//gl_FragColor.g *= 0.8;
	//gl_FragColor.b *= 0.8;
	//gl_FragColor.g += 0.2 * gl_FragColor.a;
	
	
	
	float greyNum = 0.6;	
	gl_FragColor.r = gl_FragColor.r * greyNum;
	gl_FragColor.g = gl_FragColor.g * greyNum * 2.5;
	gl_FragColor.b = gl_FragColor.b * greyNum;
}
