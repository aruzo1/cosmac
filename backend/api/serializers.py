from rest_framework.serializers import ModelSerializer
from .models import Category, Product


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "category",
            "name",
            "description",
            "img",
            "table_img",
            "bestseller",
            "special",
        ]
