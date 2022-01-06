# Generated by Django 3.2.8 on 2022-01-04 06:28

from django.db import migrations
import imagekit.models.fields


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=imagekit.models.fields.ProcessedImageField(blank=True, null=True, upload_to='', verbose_name='Аватарка пользователя'),
        ),
    ]
