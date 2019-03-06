#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_width;
uniform vec2 u_nowWidth;	//-1 ~ u_width

void main()
{
	if(v_texCoord.x < u_width)
	{
		if(v_texCoord.x - u_nowWidth.x >= 0.0 && v_texCoord.x - u_nowWidth.x < 1.0)
		{
			vec2 texcoord = v_texCoord - u_nowWidth;
			vec4 color = v_fragmentColor * texture2D(CC_Texture0,texcoord);
			gl_FragColor = color;
		}
		else
		{
			discard;
		}
    }
    else
    {
    	discard;
    }
}