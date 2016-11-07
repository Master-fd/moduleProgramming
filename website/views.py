from django.shortcuts import render

# Create your views here.
from django.shortcuts import HttpResponse
from django.shortcuts import render_to_response

def main(request):
    return render_to_response("main.html");

def backgroup(request):
    return render_to_response("backgroup.html");
