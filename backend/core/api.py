from uuid import UUID
from ninja import Router
from django.shortcuts import get_object_or_404

from itertools import chain

from account.models import CustomUser
from .models import Category, Giveaway
from .schema import GiveAwaySchema,CategorySchema,CreateGiveAwaySchema


router = Router()

@router.get("/category", response=list[CategorySchema])
def get_category(request):
    qs = Category.objects.all()
    print(qs)

    return qs


@router.get("/giveaways", response=list[GiveAwaySchema])
def list_giveaway(request):
    return  Giveaway.objects.all()


@router.get("/giveaway/{id}", response=GiveAwaySchema)
def get_giveaway(request,id:UUID):
    return Giveaway.objects.filter(id=id).first()


@router.post("/create-giveaway",response=GiveAwaySchema)
def create_giveaway(request,giveaway:CreateGiveAwaySchema):
    giveaway_data=giveaway.model_dump()

    title = giveaway_data["title"]
    item_name =giveaway_data["item_name"]
    amount = giveaway_data["amount"]
    description=giveaway_data["description"]
    category_id=giveaway_data["category"]
    is_cash=giveaway_data["is_cash"]
    owner_id=giveaway_data["owner"]

    owner=CustomUser.objects.filter(id=owner_id).first()

    if not is_cash:
        category=Category.objects.filter(id=category_id).first()
        giveaway_model=Giveaway.objects.create(category=category,item_name=item_name,owner=owner,description=description,status=True,title=title)
        return giveaway_model
    
    giveaway_model=Giveaway.objects.create(amount=amount,owner=owner,description=description,status=True,title=title)
    return giveaway_model
    

    

    