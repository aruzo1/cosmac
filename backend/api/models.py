from django.db import models


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
    img = models.ImageField("Image")
    table_img = models.ImageField("Table Image")
    bestseller = models.BooleanField()
    special = models.BooleanField()

    def __str__(self):
        return self.name
