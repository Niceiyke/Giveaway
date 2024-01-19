from ninja import Router
from django.shortcuts import get_object_or_404

from account.models import CustomUser
from .models import Item,Cash,Category
from .schema import ItemSchema,CashSchema,ItemCreateSchema
router =Router()

@router.get('/item-giveaway',response=list[ItemSchema])
def get_items_give_away(request):
    return Item.objects.all()


@router.get('/item-giveaway/{id}',response=ItemSchema)
def get_item_give_away(request,id:str):
    return get_object_or_404(Item,id=id)


@router.get('/cash-giveawy',response=list[CashSchema])
def get_cash_give_awy(request):
    return Cash.objects.all()

@router.get('/cash-giveawy/{id}',response=CashSchema)
def get_cash_give_awy(request,id:str):
    return get_object_or_404(Cash,id=id)

@router.post('/item-giveaway',response=ItemSchema)
def create_item_give_away(request,item:ItemCreateSchema):

    item_data=item.model_dump()
    
    user= get_object_or_404(CustomUser,id=item_data['user'])
    category= get_object_or_404(Category,id=item_data['category'])
    name=item_data['name']
    description=item_data['description']
    print("item",user,category,name,description)

    item_model =Item.objects.create(name=name,user=user,description=description,category=category)

    return item_model
    
