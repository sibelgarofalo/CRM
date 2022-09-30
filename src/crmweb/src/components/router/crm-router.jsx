import { Routes, Route } from 'react-router-dom';
import * as Pages from '../../pages';

const CrmRouter = (props) => {
    return (
        <div className="crm-router">
            <Routes>
                <Route path='/dashboard/dashboard-sales' element={<Pages.DashboardSales />} />
                <Route path='/dashboard/dashboard-orders' element={<Pages.DashboardOrders />} />
                <Route path='/customer/customer-new' element={<Pages.CustomerNew />} />
                <Route path='/customer/customer-find' element={<Pages.CustomerFind />} />
                <Route path='/order/order-find' element={<Pages.OrderFind />} />
                <Route path='/order/order-new' element={<Pages.OrderNew />} />
            </Routes>
        </div>
    )
};

export default CrmRouter;