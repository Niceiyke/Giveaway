from ninja import NinjaAPI

api =NinjaAPI()

api.add_router('account/','account.api.router')
api.add_router('core/','core.api.router')