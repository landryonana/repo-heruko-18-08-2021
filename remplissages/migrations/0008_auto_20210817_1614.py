# Generated by Django 2.2.24 on 2021-08-17 16:14

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('remplissages', '0007_auto_20210817_1444'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evangelisation',
            name='boss',
            field=models.ManyToManyField(blank=True, related_name='participations', to=settings.AUTH_USER_MODEL, verbose_name='Qui sont présents ?'),
        ),
    ]
