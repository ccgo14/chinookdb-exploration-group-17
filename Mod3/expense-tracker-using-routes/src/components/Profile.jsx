
import NavBar from "./NavBar"
import{Users, UserCheck, ShieldCheck} from 'lucide-react'


export default function Profile () {
    return (
         <div className="flex min-h-screen bg-gray-50">
                    <header><NavBar /></header>
        
    <main className="flex-1 p-8 bg-gray-50 min-h-screen">
      {/* Container Card */}
      <div className="max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 p-6 border-b border-slate-50 bg-slate-50/50">
          <div className="p-2 bg-[#6366f1] text-white rounded-lg">
            <Users size={20} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-800">Group-2</h2>
            <p className="text-xs text-slate-500 font-medium">Members</p>
          </div>
        </div>

        {/* Members List */}
        <div className="divide-y divide-slate-50">
          
          {/* Team Lead - Styled differently */}
          <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">JW</div>
              <div>
                <p className="text-sm font-semibold text-slate-700">Jadyn Wanja</p>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white">
                  <ShieldCheck size={10} /> Team Lead
                </span>
              </div>
            </div>
            <UserCheck size={18} className="text-green-500" />
          </div>

          {/* Member 2 */}
          <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">FW</div>
              <p className="text-sm font-medium text-slate-700">Frank Wanyeki</p>
            </div>
            <UserCheck size={18} className="text-slate-300" />
          </div>

          {/* Member 3 */}
          <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">EP</div>
              <p className="text-sm font-medium text-slate-700">Emmanuel Pneuma</p>
            </div>
            <UserCheck size={18} className="text-slate-300" />
          </div>

          {/* Member 4 */}
          <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold">DI</div>
              <p className="text-sm font-medium text-slate-700">David Ihomba</p>
            </div>
            <UserCheck size={18} className="text-slate-300" />
          </div>

        </div>
      </div>
    </main>
        </div>
    )
}