from django.db import models


class Projects(models.Model):
    project_title = models.CharField(max_length=100)
    project_toolsUsed = models.CharField(max_length=100)
    project_desc = models.TextField()
    project_link = models.CharField(max_length=100)

    def __str__(self):
        return self.project_title
