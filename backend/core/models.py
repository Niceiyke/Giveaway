# giveaway_app/models.py
from django.db import models
from django.contrib.auth import get_user_model

User =get_user_model()

class Category(models.Model):
    name =models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Item(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)

    def __str__(self):
        return  f"Item give away of {self.name} by {self.user}"

class Cash(models.Model):
    amount = models.CharField(max_length=15)
    description = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return  f"cash give away of {self.amount} by {self.user}"


class Item_Match_Maker(models.Model):
    giver = models.ForeignKey(User, related_name='item_giver', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='item_receiver', on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    matched_at = models.DateTimeField(auto_now_add=True)

class Cash_Match_Maker(models.Model):
    giver = models.ForeignKey(User, related_name='cash_giver', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='cash_receiver', on_delete=models.CASCADE)
    cash = models.ForeignKey(Cash, on_delete=models.CASCADE)
    matched_at = models.DateTimeField(auto_now_add=True)
