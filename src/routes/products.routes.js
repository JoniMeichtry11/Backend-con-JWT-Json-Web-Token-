import { Router } from "express";
const router = Router()

// Se exporta todo owo
import * as productsCtrl from "../controllers/products.controller";
import {authjwt} from '../middlewares'

router.post('/', [authjwt.verifyToken, authjwt.isModerator ], productsCtrl.createProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productsId', productsCtrl.getProductById)
router.put('/:productsId', [authjwt.verifyToken, authjwt.isAdmin]
, productsCtrl.updateProductById)
router.delete('/:productsId',[authjwt.verifyToken, authjwt.isAdmin],productsCtrl.deleteProductById)

export default router;