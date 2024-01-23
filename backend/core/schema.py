from datetime import datetime
from uuid import UUID
from ninja import ModelSchema, Schema
from .models import Category
from account.models import CustomUser
from account.schema import UserSchema

from typing import List


class CategorySchema(ModelSchema):
    class Meta:
        model = Category
        fields = ("id", "name")


class GiveAwaySchema(Schema):
    id: UUID
    title: str
    item_name: str | None
    amount: float | None
    description: str
    category: CategorySchema | None
    is_cash: bool
    status: bool
    created_at: datetime
    owner: UserSchema
    participant: List[UserSchema] = None
    slug: str


class CreateGiveAwaySchema(Schema):
    title: str
    item_name: str | None
    amount: float | None
    description: str
    category: str | None = None
    is_cash: bool
    owner: str


class JoinGiveAwaySchema(Schema):
    slug: str
    id: str
