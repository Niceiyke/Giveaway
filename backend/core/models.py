# giveaway_app/models.py
import uuid
from django.db import models
from django_extensions.db.fields import AutoSlugField
from django.contrib.auth import get_user_model


User = get_user_model()


class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Giveaway(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)
    item_name = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    is_cash = models.BooleanField(default=False)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, blank=True, null=True
    )
    participant = models.ManyToManyField(
        User, blank=True, related_name="item_participant"
    )
    status = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    slug = AutoSlugField(populate_from=['title', 'description'])

    def __str__(self):
        return self.title
