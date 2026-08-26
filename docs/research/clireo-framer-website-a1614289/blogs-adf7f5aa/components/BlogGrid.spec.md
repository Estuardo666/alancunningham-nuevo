# BlogGrid / BlogCard Specification
- Target: .../blogs-adf7f5aa/BlogGrid.tsx + shared/BlogCard.tsx
- Interaction: link + hover (zoom imagen 1.05, 500ms ease-out)
- section: bg var(--background); padding 110px 32px 140px (móvil 80px 20px 96px)
- grid: repeat(3, 1fr) en lg, 2 en sm, 1 en móvil; gap-x 21px, gap-y 36px
- media: alto 320px (móvil 240px), radius 14px, overflow hidden
- meta: fila con fecha 16/23.2/-0.24 var(--muted-foreground) + chip categoría (pill, bg var(--accent-yellow), text var(--accent-foreground), px 8 py 4, 12px)
- título h3: 26/31.2/-0.91 var(--foreground); min-height 62px en >=sm para alinear filas
- Datos: 5 posts, fuente compartida en shared/posts.ts (los 3 primeros se reutilizan en la home)
