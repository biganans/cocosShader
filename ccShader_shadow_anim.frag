#ifdef GL_ES
precision mediump float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform float u_alpha_shadow;

void main()
{
    vec4 normalColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);
    gl_FragColor = vec4(normalColor.r * (1.0-u_alpha_shadow), normalColor.g * (1.0-u_alpha_shadow), normalColor.b * (1.0-u_alpha_shadow), normalColor.a) ;
}