import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { ProductsSection } from './components/ProductsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EndocannabinoidSection } from './components/EndocannabinoidSection';
import { ClinicalIndexSection } from './components/ClinicalIndexSection';
import { ImportGuideSection } from './components/ImportGuideSection';
import { DosageGuideSection } from './components/DosageGuideSection';
import { BrandQualitySection } from './components/BrandQualitySection';
import { OriginalPdfModal } from './components/OriginalPdfModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { Footer } from './components/Footer';
import { Product } from './data/products';
import { Check, ShoppingBag } from 'lucide-react';
import { RestrictedAccessModal } from './components/RestrictedAccessModal';

export default function App() {
  const [isAccessGranted, setIsAccessGranted] = useState<boolean>(() => {
    return sessionStorage.getItem('dm_catalog_access_granted') === 'true';
  });
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState<boolean>(false);
  const [pdfInitialPage, setPdfInitialPage] = useState<number>(1);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    // Show toast
    setToastMessage(`${product.name} adicionado à solicitação!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // PDF Page navigation
  const handleOpenPdfPage = (pageNumber: number) => {
    setPdfInitialPage(pageNumber);
    setIsPdfModalOpen(true);
  };

  // Section navigation
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#faf8fd] text-slate-900 selection:bg-purple-200 selection:text-purple-950 overflow-x-hidden w-full max-w-full">
      
      {/* Restricted Medical Access Gate */}
      {!isAccessGranted && (
        <RestrictedAccessModal onUnlock={() => setIsAccessGranted(true)} />
      )}

      {/* Top Bar Contract compliant Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPdfViewer={() => {
          setPdfInitialPage(1);
          setIsPdfModalOpen(true);
        }}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections from the 19-Page PDF */}
      <main>
        {/* Cover / Page 01 */}
        <HeroBanner
          onExploreProducts={() => scrollToSection('produtos')}
          onOpenPdfViewer={() => {
            setPdfInitialPage(1);
            setIsPdfModalOpen(true);
          }}
          onExploreScience={() => scrollToSection('endocanabinoide')}
        />

        {/* Products / Pages 06, 07, 08, 09, 10, 11 */}
        <ProductsSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* Endocannabinoid System / Pages 04 & 05 */}
        <EndocannabinoidSection />

        {/* Clinical Conditions Index / Pages 13, 15, 16 */}
        <ClinicalIndexSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onAddToCart={handleAddToCart}
        />

        {/* ANVISA Import Process & Prescription Checklist / Page 17 */}
        <ImportGuideSection />

        {/* Administration, Sublingual Rules & Dropper Pipette / Page 18 */}
        <DosageGuideSection />

        {/* The Brand & Laboratory Quality / Pages 02 & 03 */}
        <BrandQualitySection />
      </main>

      {/* Footer / Page 19 */}
      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenPdfPage={handleOpenPdfPage}
      />

      {/* Original PDF Viewer Modal (All 19 Pages) */}
      <OriginalPdfModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        initialPage={pdfInitialPage}
      />

      {/* Quotation / Import Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-purple-950 text-white px-4 py-3 rounded-xl shadow-2xl border border-purple-800 flex items-center gap-3 animate-in slide-in-from-bottom-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold">{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
