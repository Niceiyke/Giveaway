from django.contrib import admin
from .models import Cash,Item,Cash_Match_Maker,Item_Match_Maker,Category

# Register your models here.
admin.site.register(Cash)
admin.site.register(Item)
admin.site.register(Cash_Match_Maker)
admin.site.register(Item_Match_Maker)
admin.site.register(Category)