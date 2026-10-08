# ThaiDigital Market — Database Schema Overview

## Core Entities
The schema is designed around a marketplace model where each user can be a buyer and seller at the same time.

### User
- id
- name
- username
- email
- passwordHash
- image
- role (USER | ADMIN)
- createdAt
- updatedAt

### Store
- id
- ownerId
- name
- slug
- logo
- banner
- description
- socialLinks
- rating
- salesCount
- createdAt
- updatedAt

### SellerProfile
- id
- userId
- storeId
- payoutPreference
- verificationStatus
- createdAt
- updatedAt

### Category
- id
- name
- slug
- description
- parentId
- sortOrder
- createdAt
- updatedAt

### Product
- id
- sellerId
- storeId
- categoryId
- title
- slug
- description
- priceInMinor
- status (DRAFT | PENDING_REVIEW | PUBLISHED | REJECTED | SUSPENDED)
- fileType
- fileSize
- softwareRequirements
- license
- tags
- rating
- salesCount
- createdAt
- updatedAt

### ProductImage
- id
- productId
- url
- altText
- isThumbnail
- createdAt
- updatedAt

### Cart
- id
- userId
- createdAt
- updatedAt

### CartItem
- id
- cartId
- productId
- createdAt
- updatedAt

### Order
- id
- buyerId
- totalInMinor
- commissionInMinor
- sellerRevenueInMinor
- status (PENDING | PAID | FAILED | REFUNDED | CANCELLED)
- paymentStatus
- createdAt
- updatedAt

### OrderItem
- id
- orderId
- productId
- sellerId
- priceInMinor
- commissionInMinor
- revenueInMinor
- createdAt
- updatedAt

### Payment
- id
- orderId
- provider
- providerReference
- amountInMinor
- status
- createdAt
- updatedAt

### Purchase
- id
- userId
- orderId
- productId
- sellerId
- downloadedAt
- createdAt
- updatedAt

### Review
- id
- userId
- productId
- rating
- comment
- createdAt
- updatedAt

### Commission
- id
- orderId
- productId
- sellerId
- rate
- amountInMinor
- createdAt
- updatedAt

### SellerBalance
- id
- sellerId
- availableBalanceInMinor
- pendingBalanceInMinor
- paidOutInMinor
- currency
- createdAt
- updatedAt

### Payout
- id
- sellerId
- amountInMinor
- status
- provider
- reference
- createdAt
- updatedAt

### Download
- id
- userId
- purchaseId
- productId
- signedUrlToken
- expiresAt
- createdAt
- updatedAt

### MarketplaceSetting
- id
- key
- value
- updatedAt

### AdminAction
- id
- adminId
- targetType
- targetId
- action
- reason
- createdAt
- updatedAt

## Design Notes
- All prices are stored in minor units (stang) to avoid float precision problems.
- Commission is calculated on the server and never accepted from the client.
- Every model includes createdAt and updatedAt for auditability.
- Product reviews and purchases are linked to real user purchase records.
