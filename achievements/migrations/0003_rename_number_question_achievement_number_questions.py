# Generated by Django 3.2.8 on 2022-01-26 04:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('achievements', '0002_alter_achievement_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='achievement',
            old_name='number_question',
            new_name='number_questions',
        ),
    ]