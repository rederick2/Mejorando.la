from django.contrib import admin
from models import Video, VideoComentario, Setting, Curso, RegistroCurso
from django.conf import settings


class VideoAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('titulo', )}
    ordering = ('-fecha', )

    # agregar editor de texto
    class Media:
        js = (
            'http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js',
            '%swysihtml5/parser_rules/advanced.js' % settings.STATIC_URL,
            '%swysihtml5/dist/wysihtml5-0.3.0.min.js' % settings.STATIC_URL,
            '%sjs/admin.js' % settings.STATIC_URL
        )

        css = {
            'all': ('%scss/admin.css' % settings.STATIC_URL,)
        }


class VideoComentarioAdmin(admin.ModelAdmin):
    ordering = ('-fecha', )
    readonly_fields = ('autor', 'autor_email', 'autor_url', 'content', 'video')

class RegistroCursoAdmin(admin.ModelAdmin):
    ordering = ('code', )

# registrar los modelos que utilizaran la interfaz de administracion d Django
admin.site.register(Video, VideoAdmin)
admin.site.register(VideoComentario, VideoComentarioAdmin)
admin.site.register(Setting)
admin.site.register(Curso)
admin.site.register(RegistroCurso, RegistroCursoAdmin)
