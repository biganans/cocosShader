#ifdef GL_ES
precision lowp float;
#endif

varying vec4 v_fragmentColor;
varying vec2 v_texCoord;

uniform sampler2D u_mask_texture;
uniform float u_Alpha;

void main()
{
        vec4 normalColor1 = texture2D(u_mask_texture, v_texCoord);
        vec4 normalColor = texture2D(CC_Texture0, v_texCoord);

        if(normalColor1.r <= u_Alpha)
        {
            normalColor.a = 0.0;
            normalColor.rgb = vec3(0.0, 0.0, 0.0);
            gl_FragColor = normalColor;
        }
        else if(normalColor1.r - 1.0/ (200.0) <= u_Alpha)
        {
            normalColor.rgb = normalColor.rgb  + normalColor.rgb * normalColor1.r;
            normalColor.a =  normalColor1.r;
            gl_FragColor = normalColor; 
        }
        else
        {
            gl_FragColor = v_fragmentColor * normalColor;
        }
}