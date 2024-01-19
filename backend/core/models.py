# giveaway_app/models.py
import uuid
from django.db import models
from django.contrib.auth import get_user_model

User =get_user_model()

class Category(models.Model):
    id =models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    name =models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Item(models.Model):
    id =models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    name = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    participant =models.ManyToManyField(User, blank=True,related_name='item_participant')
    status =models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now =True)


    def __str__(self):
        return  f"Item give away of {self.name} by {self.user}"

class Cash(models.Model):
    id =models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    amount = models.CharField(max_length=15)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    participant =models.ManyToManyField(User, blank=True,related_name='cash_participant')
    status =models.BooleanField(default=False)
    created_at=models.DateTimeField(auto_now =True)

    def __str__(self):
        return  f"cash give away of {self.amount} by {self.user}"

