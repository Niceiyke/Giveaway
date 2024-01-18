from ninja import NinjaAPI

api =NinjaAPI()

@api.get('/home')
def home(request):
    return{"response": "hello world"}