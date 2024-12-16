from django.core.management.base import BaseCommand
from products.models import Product
import random

class Command(BaseCommand):
    def handle(self, *args, **kwargs):
        categories = ['Electronics', 'Clothing', 'Groceries']
        for _ in range(100):
            Product.objects.create(
                name=f"Product {_}",
                description="Sample product description",
                category=random.choice(categories),
                price=random.uniform(10, 500),
                rating=random.uniform(1, 5),
                stock=random.randint(1, 50),
            )
        self.stdout.write("Products populated successfully.")
