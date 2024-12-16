from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Product
from django.db.models import Q

@api_view(['GET'])
def product_list(request):
    query = request.GET.get('q', '')
    category = request.GET.get('category', '')
    min_price = request.GET.get('min_price', None)
    max_price = request.GET.get('max_price', None)
    min_rating = request.GET.get('min_rating', None)
    in_stock = request.GET.get('in_stock', None)

    # Initialize the base queryset
    products = Product.objects.all()

    # Filter by search term in name or description
    if query:
        products = products.filter(
            Q(name__icontains=query) | Q(description__icontains=query)
        )

    # Filter by category
    if category:
        products = products.filter(category__icontains=category)

    # Filter by price range if min_price or max_price is specified
    if min_price:
        try:
            min_price = float(min_price)
            products = products.filter(price__gte=min_price)
        except ValueError:
            pass  # Ignore invalid price values

    if max_price:
        try:
            max_price = float(max_price)
            products = products.filter(price__lte=max_price)
        except ValueError:
            pass  # Ignore invalid price values

    # Filter by minimum rating if provided
    if min_rating:
        try:
            min_rating = float(min_rating)
            products = products.filter(rating__gte=min_rating)
        except ValueError:
            pass  # Ignore invalid rating values

    # Filter by stock availability
    if in_stock:
        if in_stock.lower() == 'true':
            products = products.filter(stock__gt=0)
        elif in_stock.lower() == 'false':
            products = products.filter(stock=0)

    # Serialize the filtered products
    data = [{"id": p.id, "name": p.name, "price": p.price, "category": p.category, "rating": p.rating, "stock": p.stock} for p in products]
    return Response(data)
