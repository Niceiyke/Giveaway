from ninja import Router
from .schema import CustomUserSchema
from .models import CustomUser

router =Router()

@router.get('/users',response =list[CustomUserSchema])
def get_users(request):
   

    return CustomUser.objects.all()
