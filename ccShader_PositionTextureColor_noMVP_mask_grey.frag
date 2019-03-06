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
		
		normalColor.rgb = normalColor.rgb * v_fragmentColor.rgb; 
		float grey = dot(normalColor.rgb, vec3(0.299, 0.587, 0.114)); 
		float alpha = v_fragmentColor.r;
		vec3 color1 = vec3(0.3, 0.3, 0.3);
		vec3 grey1 = vec3(grey) * alpha + (1.0- alpha) * color1; 	      
		gl_FragColor = vec4(grey1* v_fragmentColor.a * normalColor.a, normalColor.a * v_fragmentColor.a); 
}