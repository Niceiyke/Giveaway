from ninja import ModelSchema,Schema
from .models import Item,Cash,Category
from account.models import CustomUser

class CategorySchema(ModelSchema):
    class Meta:
        model=Category
        fields =('id','name')

class ItemSchema(ModelSchema):
    class Meta:
        model=Item
        fields =('id','name','description','user','category','participant','status','created_at')

class ItemCreateSchema(Schema):
    name:str
    description:str
    user:str
    category:str


class CashSchema(ModelSchema):
    class Meta:
        model=Cash
        fields =('id','description','user','participant','status','created_at')