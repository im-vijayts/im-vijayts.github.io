from django.shortcuts import render
from django.http import HttpResponse
from .models import Projects


def homepage(request):
    return render(request, "main/index.html", {"projects": Projects.objects.all})
