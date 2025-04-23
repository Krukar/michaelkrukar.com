import Home from './components/Home';
import Info from './components/Info';

export default function Page() {
    return (
        <main>
            <div className="relative z-20">
                <Home />
            </div>

            <div className="min-h-screen bg-light text-dark">
                <div className="fixed inset-0 z-10">
                    <Info />
                </div>
            </div>
        </main>
    );
}
