import { Mail, Phone, MapPin} from 'lucide-react';
{/* Contact Information */ }
<div>
    <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">In United States</h3>
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                        href="mailto:info@makssolutions.org"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        info@makssolutions.org
                    </a>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                        href="tel:+918460135272"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        +91 8460135272
                    </a>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-slate-400">
                        Kingston, Rhode Island, USA
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div className="p-8 bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">In India</h3>
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <a
                        href="mailto:info@makssolutions.org"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        info@makssolutions.org
                    </a>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Phone</h4>
                    <a
                        href="tel:+14012693358"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                        (+1) 401-269-3358
                    </a>
                </div>
            </div>

            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h4 className="text-white font-semibold mb-1">Location</h4>
                    <p className="text-slate-400">
                        Udaipur, Rajastan, India
                    </p>
                </div>
            </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
            <p className="text-slate-400 text-center italic">
                Let's build success together!
            </p>
        </div>
    </div>
</div>