from ninja import Router
from django.shortcuts import get_object_or_404

from itertools import chain

from account.models import CustomUser
from .models import Category, Giveaway
from .schema import GiveAwaySchema


router = Router()


@router.get("/giveaway", response=list[GiveAwaySchema])
def get_giveaway(request):
    qs = Giveaway.objects.all()

    return qs
