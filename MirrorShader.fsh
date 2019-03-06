#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

void main()
{
    vec4 normalColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
    normalColor.r = normalColor.r * 0.5;
    normalColor.g = normalColor.g * 0.8;
    normalColor.b = normalColor.b + normalColor.a * 0.2;
    gl_FragColor = normalColor;
}

