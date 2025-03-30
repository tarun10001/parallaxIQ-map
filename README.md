# Map Visualization Dashboard

A Next.js application featuring an interactive map dashboard with advanced visualization capabilities.

## Features

### 🗺️ Core Map Features
- **Embedded Map IFrame** - Seamless integration of Google Maps
- **Interactive Search** - Find locations with intelligent autocomplete suggestions
- **Multi-View Support** - Toggle between different map display modes

### ⚙️ Map Customization
- **Visualization Modes**:
  - ✅ Marker View - Display locations as individual pins
  - 🔥 Heatmap View - Visualize location density with color gradients
  - 🗃️ Clustering - Group nearby markers for cleaner displays (toggleable)
  - 🏗️ Geofences - Show/hide territorial boundaries (toggleable)

- **Map Styles**:
  - 🌞 Day Mode - Standard light-colored map
  - 🌙 Night Mode - Dark theme for reduced eye strain
  - 🛰️ Satellite - High-resolution aerial imagery
  - 🌆 Hybrid - Combined street and satellite view

### 🏗️ Territory Management
- **Custom Territory Creation** - Draw polygons directly on the map to define areas

## Getting Started

### Installation
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

## Configuration

1. Create a `.env.local` file in the root directory
2. Add your Google Maps API key:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo&project-name=map-dashboard&repository-name=map-dashboard)

### Other Platforms
See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for alternative hosting options.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

[MIT](https://choosealicense.com/licenses/mit/)
