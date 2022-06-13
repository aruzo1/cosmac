from django.db import models
from cloudinary.models import CloudinaryField


class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name


class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField()
    img = CloudinaryField("image")
    table_img = CloudinaryField("image")
    bestseller = models.BooleanField()
    special = models.BooleanField()

    def __str__(self):
        return self.name
