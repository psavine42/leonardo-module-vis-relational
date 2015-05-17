import datetime
from django.db import models
from django.utils.translation import ugettext_lazy as _

from leonardo.module.web.models import Widget
from leonardo_module_vis_relational.models import RelationalDataSource

class SunburstWidget(Widget):
    """
    Widget which shows sunburt diagram.
    """
    data = models.ForeignKey(RelationalDataSource, verbose_name=_('data source'), blank=True, null=True) 
    zoom = models.BooleanField(verbose_name=_('Zoom'), default=False)

    def get_data(self):
        return "/sitemap/json/"

    class Meta:
        abstract = True
        verbose_name = _("Sunburst")
        verbose_name_plural = _("Sunbursts")
