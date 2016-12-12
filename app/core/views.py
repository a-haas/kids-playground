from django.shortcuts import render
from django.contrib.auth.decorators import login_required

def home(request):
	return render(request, 'index.html', {})

def playground(request):
	return render(request, "playground.html", {})
	
@login_required(login_url="login/")
def project(request):
	return ""