from ninja import ModelSchema
from .models import CustomUser


class CustomUserSchema(ModelSchema):
    class Meta:
        model=CustomUser
        fields =('id','email','first_name','last_name')

