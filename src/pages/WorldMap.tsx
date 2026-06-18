import { useState, useMemo } from 'react';
import { Map as MapIcon, Users, X, MapPin, Navigation, Sparkles, ArrowRight, Home, Info } from 'lucide-react';
import { mapRegions, getBagsByRegion, getBagsByLocation, type MapRegion, type Location } from '@/data/bags';
import BagCard from '@/components/BagCard';
import {
  FairyBackground,
  FloatingStar,
  FloatingCloud,
  FloatingFlower,
  Sparkle,
} from '@/components/Decorators';

const WorldMap = () => {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null);

  const selectedRegion = useMemo(() => {
    if (selectedLocation) {
      return mapRegions.find(r =>
        r.locations.some(loc => loc.name === selectedLocation.name)
      ) ?? null;
    }
    return selectedRegionId
      ? mapRegions.find((r) => r.id === selectedRegionId) ?? null
      : null;
  }, [selectedRegionId, selectedLocation]);

  const residents = useMemo(() => {
    if (!selectedRegion) return [];
    if (selectedLocation) {
      return getBagsByLocation(selectedLocation.name);
    }
    return getBagsByRegion(selectedRegion.id);
  }, [selectedRegion, selectedLocation]);

  const handleSelectRegion = (regionId: string) => {
    setSelectedRegionId(regionId);
    setSelectedLocation(null);
    requestAnimationFrame(() => {
      const el = document.getElementById('region-residents');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleSelectLocation = (region: MapRegion, location: Location) => {
    setSelectedRegionId(region.id);
    setSelectedLocation(location);
    requestAnimationFrame(() => {
      const el = document.getElementById('region-residents');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleClose = () => {
    setSelectedRegionId(null);
    setSelectedLocation(null);
  };

  const getRegionCentroid = (path: string): { x: number; y: number } => {
    const points = path.match(/[0-9]+/g)?.map(Number) || [];
    let sumX = 0, sumY = 0, count = 0;
    for (let i = 0; i < points.length; i += 2) {
      sumX += points[i];
      sumY += points[i + 1];
      count++;
    }
    return count > 0 ? { x: sumX / count, y: sumY / count } : { x: 50, y: 50 };
  };

  const getLocationPositions = (region: MapRegion): { location: Location; x: number; y: number }[] => {
    const centroid = getRegionCentroid(region.svgPath);
    const positions = [];
    const angleStep = (2 * Math.PI) / region.locations.length;
    const radius = 12;

    for (let i = 0; i < region.locations.length; i++) {
      const angle = angleStep * i - Math.PI / 2;
      positions.push({
        location: region.locations[i],
        x: centroid.x + Math.cos(angle) * radius,
        y: centroid.y + Math.sin(angle) * radius,
      });
    }
    return positions;
  };

  return (
    <FairyBackground>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 stagger-animation">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-sm">
              <MapIcon size={16} className="text-fairy-violet" />
              <span className="text-sm font-medium text-purple-700">世界地图</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-purple-800 mb-3 text-shadow-fairy">
              <span className="bg-gradient-to-r from-fairy-rose via-fairy-violet to-fairy-sky bg-clip-text text-transparent">
                包包世界地图
              </span>
            </h1>
            <p className="text-purple-600/70 max-w-2xl mx-auto leading-relaxed">
              不同的包包居民居住在不同的区域——旅行包山谷、手提包城区、双肩包森林……
              <br className="hidden md:block" />
              点击地图上的区域或地标，认识生活在那里的居民吧！
            </p>
          </div>

          <div className="fairy-card p-3 md:p-6 mb-6 stagger-animation">
            <div className="relative w-full aspect-[16/11] md:aspect-[16/10] rounded-fairy overflow-hidden bg-gradient-to-br from-sky-50 via-purple-50 to-rose-50">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.3" fill="#C4B5FD" opacity="0.5" />
                  </pattern>
                </defs>

                <rect width="100" height="100" fill="url(#dots)" />

                <path
                  d="M18,22 L66,20 L78,52 L48,80 L22,58"
                  fill="none"
                  stroke="#C4B5FD"
                  strokeWidth="2"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                  opacity="0.7"
                />

                {mapRegions.map((region) => {
                  const count = getBagsByRegion(region.id).length;
                  const isActive = selectedRegion?.id === region.id;
                  const isHovered = hoveredRegionId === region.id;

                  return (
                    <g key={region.id}>
                      <path
                        d={region.svgPath}
                        fill={region.fillColor}
                        fillOpacity={isActive ? 0.9 : isHovered ? 0.75 : 0.5}
                        stroke={region.strokeColor}
                        strokeWidth={isActive ? "2.5" : isHovered ? "2" : "1.5"}
                        vectorEffect="non-scaling-stroke"
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          filter: isActive ? 'url(#glow)' : 'none',
                          transform: isHovered || isActive ? 'scale(1.02)' : 'scale(1)',
                          transformOrigin: 'center',
                        }}
                        onMouseEnter={() => setHoveredRegionId(region.id)}
                        onMouseLeave={() => setHoveredRegionId(null)}
                        onClick={() => handleSelectRegion(region.id)}
                      />
                      <path
                        d={region.svgPath}
                        fill="none"
                        stroke={region.strokeColor}
                        strokeWidth="0.5"
                        strokeDasharray="1 2"
                        vectorEffect="non-scaling-stroke"
                        opacity="0.6"
                        className="pointer-events-none"
                      />
                    </g>
                  );
                })}

                {mapRegions.map((region) =>
                  getLocationPositions(region).map(({ location, x, y }) => {
                    const isLocationActive = selectedLocation?.name === location.name;
                    const bagCount = getBagsByLocation(location.name).length;

                    return (
                      <g
                        key={`${region.id}-${location.name}`}
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelectLocation(region, location);
                        }}
                      >
                        <circle
                          cx={x}
                          cy={y}
                          r={isLocationActive ? "3.5" : "2.8"}
                          fill="white"
                          stroke={region.strokeColor}
                          strokeWidth="1.5"
                          vectorEffect="non-scaling-stroke"
                          className="transition-all duration-300"
                          style={{
                            filter: isLocationActive ? 'url(#glow)' : 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
                            transform: isLocationActive ? 'scale(1.1)' : 'scale(1)',
                            transformOrigin: `${x}px ${y}px`,
                          }}
                        />
                        <text
                          x={x}
                          y={y + 0.6}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="3"
                          className="pointer-events-none"
                        >
                          {location.emoji}
                        </text>
                      </g>
                    );
                  })
                )}

                {mapRegions.map((region) => {
                  const centroid = getRegionCentroid(region.svgPath);
                  const count = getBagsByRegion(region.id).length;
                  const isActive = selectedRegion?.id === region.id;

                  return (
                    <g
                      key={`marker-${region.id}`}
                      className="cursor-pointer pointer-events-none"
                    >
                      <text
                        x={centroid.x}
                        y={centroid.y - 8}
                        textAnchor="middle"
                        className="pointer-events-none select-none"
                        fontSize="6"
                        style={{
                          filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.15))',
                          transform: isActive ? 'scale(1.2)' : 'scale(1)',
                          transformOrigin: `${centroid.x}px ${centroid.y - 8}px`,
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        {region.emoji}
                      </text>
                      <text
                        x={centroid.x}
                        y={centroid.y - 1}
                        textAnchor="middle"
                        className="pointer-events-none select-none font-display"
                        fontSize="2.8"
                        fontWeight="bold"
                        fill="#6B21A8"
                        style={{
                          filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.8))',
                        }}
                      >
                        {region.name}
                      </text>
                      <g transform={`translate(${centroid.x + 8}, ${centroid.y - 10})`}>
                        <circle
                          r="3"
                          fill={region.iconColor}
                          vectorEffect="non-scaling-stroke"
                          style={{
                            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
                          }}
                        />
                        <text
                          y="0.6"
                          textAnchor="middle"
                          className="pointer-events-none select-none"
                          fontSize="2.2"
                          fontWeight="bold"
                          fill="white"
                        >
                          {count}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>

              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-purple-600 shadow-sm z-10">
                <Navigation size={14} className="text-fairy-violet" />
                <span>包包世界</span>
              </div>

              <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-purple-600 shadow-sm z-10">
                <Info size={14} className="text-fairy-violet" />
                <span>点击色块或地标探索</span>
              </div>

              <FloatingCloud className="top-[12%] left-[40%]" delay={0} />
              <FloatingCloud className="bottom-[14%] left-[70%]" delay={2} />
              <FloatingStar className="top-[40%] left-[50%]" delay={0.5} size={14} />
              <FloatingStar className="top-[68%] left-[60%]" delay={1.2} size={12} />
              <FloatingFlower className="top-[30%] right-[40%]" delay={1} color="#FB7185" />
              <Sparkle className="bottom-[30%] left-[40%]" delay={0.6} />

              {hoveredRegionId && !selectedRegionId && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-fairy shadow-lg z-20 pointer-events-none transition-all duration-300">
                  {mapRegions.find(r => r.id === hoveredRegionId) && (
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">
                        {mapRegions.find(r => r.id === hoveredRegionId)?.emoji}
                      </span>
                      <div>
                        <div className="font-display font-bold text-purple-800 text-sm">
                          {mapRegions.find(r => r.id === hoveredRegionId)?.name}
                        </div>
                        <div className="text-xs text-purple-500">
                          共 {getBagsByRegion(hoveredRegionId).length} 位居民
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {mapRegions.map((region) => {
                const isActive = selectedRegion?.id === region.id;
                return (
                  <button
                    key={region.id}
                    onClick={() => handleSelectRegion(region.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-fairy-rose to-fairy-violet text-white shadow-md'
                        : 'bg-white/70 text-purple-600 hover:bg-white/90'
                    }`}
                  >
                    <span>{region.emoji}</span>
                    <span>{region.name}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      {getBagsByRegion(region.id).length}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-purple-100">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-purple-500">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-purple-300"></div>
                  <span>点击色块查看全区居民</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-white border-2 border-purple-400"></div>
                  <span>点击地标查看特定地点居民</span>
                </div>
              </div>
            </div>
          </div>

          <div id="region-residents" className="scroll-mt-24">
            {selectedRegion ? (
              <div className="fairy-card overflow-hidden stagger-animation">
                <div className={`relative bg-gradient-to-br ${selectedRegion.gradient} p-6 md:p-8`}>
                  <button
                    onClick={handleClose}
                    aria-label="关闭"
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-purple-500 hover:text-fairy-rose hover:bg-white shadow-sm transition-all hover:scale-110"
                  >
                    <X size={18} />
                  </button>

                  <div className="flex items-center gap-4 pr-10">
                    <span className="text-5xl md:text-6xl drop-shadow-md animate-float-slow">
                      {selectedRegion.emoji}
                    </span>
                    <div>
                      <div className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-purple-700 mb-2 shadow-sm">
                        <MapPin size={12} style={{ color: selectedRegion.iconColor }} />
                        <span>{selectedRegion.type}居住区</span>
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-purple-800">
                        {selectedLocation ? selectedLocation.name : selectedRegion.name}
                      </h2>
                      {selectedLocation && (
                        <div className="flex items-center gap-2 mt-1">
                          <Home size={12} className="text-purple-500" />
                          <span className="text-xs text-purple-600">
                            位于 {selectedRegion.name}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-purple-700/80 leading-relaxed mt-4 max-w-2xl text-sm md:text-base">
                    {selectedLocation
                      ? selectedLocation.description
                      : selectedRegion.description}
                  </p>

                  {!selectedLocation && selectedRegion.locations.length > 0 && (
                    <div className="mt-5">
                      <div className="text-sm font-medium text-purple-700 mb-2">📍 区域内地点：</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedRegion.locations.map((loc) => {
                          const locCount = getBagsByLocation(loc.name).length;
                          const isLocActive = selectedLocation?.name === loc.name;
                          return (
                            <button
                              key={loc.name}
                              onClick={() => handleSelectLocation(selectedRegion, loc)}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isLocActive
                                  ? 'bg-white text-purple-700 shadow-md'
                                  : 'bg-white/50 text-purple-600 hover:bg-white/80'
                              }`}
                            >
                              <span>{loc.emoji}</span>
                              <span>{loc.name}</span>
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600">
                                {locCount}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5 md:p-8">
                  <div className="flex items-center gap-2 mb-5">
                    <Users size={20} className="text-fairy-violet" />
                    <h3 className="font-display text-lg md:text-xl font-bold text-purple-800">
                      这里住着 {residents.length} 位居民
                    </h3>
                    <Sparkles size={16} className="text-fairy-amber" />
                  </div>

                  {residents.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                      {residents.map((bag, index) => (
                        <BagCard key={bag.id} bag={bag} index={index} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 text-purple-400">
                      <div className="text-4xl mb-3">🏠</div>
                      <p>这里暂时还没有居民入住哦～</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="fairy-card p-10 md:p-14 text-center stagger-animation">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-purple-700 mb-2">
                  选择一个区域开始探索
                </h3>
                <p className="text-purple-500/80 max-w-md mx-auto">
                  点击上方地图中的任意色块或小圆点地标，
                  或是下方的区域标签，
                  就能看到生活在那里的包包居民啦～
                </p>
                <div className="flex items-center justify-center gap-2 mt-5 text-fairy-violet/70">
                  <ArrowRight size={16} className="rotate-[-90deg]" />
                  <span className="text-sm">点击地图探索</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </FairyBackground>
  );
};

export default WorldMap;
