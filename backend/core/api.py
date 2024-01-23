import os
from dotenv import load_dotenv
from ninja import Router
from ninja.security import HttpBearer
from ninja.errors import AuthenticationError
from account.models import CustomUser
from .models import Category, Giveaway
from .schema import (
    GiveAwaySchema,
    CategorySchema,
    CreateGiveAwaySchema,
    JoinGiveAwaySchema,
)
import jwt
import datetime



router = Router()

class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
       load_dotenv()
       key =os.getenv("SECRET_KEY")
       if not token:
        raise AuthenticationError()
       try:
       
        data =jwt.decode(token,key,algorithms=['HS256'])
        converted_time= datetime.datetime.utcfromtimestamp(data['exp'])
        current_time= datetime.datetime.utcnow()

        if(converted_time>current_time):
            return True
        
       except jwt.ExpiredSignatureError:
        return False
       


@router.get("/category", response=list[CategorySchema])
def get_category(request):
    qs = Category.objects.all()
    print(qs)
    return qs

@router.get("/giveaways",auth=AuthBearer(), response=list[GiveAwaySchema])
def list_giveaway(request):
    return Giveaway.objects.all()


@router.get("/giveaway/{slug}", response=GiveAwaySchema)
def get_giveaway(request, slug: str):
    return Giveaway.objects.filter(slug=slug).first()


@router.post("/create-giveaway", auth=AuthBearer(), response=GiveAwaySchema)
def create_giveaway(request, giveaway: CreateGiveAwaySchema):
    giveaway_data = giveaway.model_dump()

    title = giveaway_data["title"]
    item_name = giveaway_data["item_name"]
    amount = giveaway_data["amount"]
    description = giveaway_data["description"]
    category_id = giveaway_data["category"]
    is_cash = giveaway_data["is_cash"]
    owner_id = giveaway_data["owner"]

    owner = CustomUser.objects.filter(id=owner_id).first()

    if not is_cash:
        category = Category.objects.filter(id=category_id).first()
        giveaway_model = Giveaway.objects.create(
            category=category,
            item_name=item_name,
            owner=owner,
            description=description,
            status=True,
            title=title,
        )
        return giveaway_model

    giveaway_model = Giveaway.objects.create(
        amount=amount, owner=owner, description=description, status=True, title=title
    )
    return giveaway_model


@router.post("/join-giveaway/{slug}", auth=AuthBearer())
def join_giveaway(request, data: JoinGiveAwaySchema):
    giveaway_qs = Giveaway.objects.filter(slug=data.slug).first().participant
    user = CustomUser.objects.filter(id=data.id).first()
    giveaway_qs.add(user)

    return {"status": "success"}
