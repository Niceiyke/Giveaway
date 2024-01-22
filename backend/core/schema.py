from ninja import ModelSchema, Schema
from .models import Category
from account.models import CustomUser
from account.schema import CustomUserSchema

from typing import List


class CategorySchema(ModelSchema):
    class Meta:
        model = Category
        fields = ("id", "name")


class GiveAwaySchema(Schema):
    id: str
    item_name: str
    amount: float
    description: str
    category: str
    is_cash: bool
    status: str
    created_at: str
    owner: CustomUserSchema
    participant: List[CustomUserSchema]
